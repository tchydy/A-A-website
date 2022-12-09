/* eslint-disable no-unused-vars */
require('dotenv').config();

const logger = require('morgan');
const express = require('express');
const errorHandler = require('errorhandler');

const fetch = require('node-fetch');
const Prismic = require('@prismicio/client');
const PrismicH = require('@prismicio/helpers');
const PrismicR = require('@prismicio/richtext');

const uaParser = require('ua-parser-js');

const port = process.env.PORT || 3000;
const app = express();
const path = require('path');
const { response } = require('express');

const cors =require('cors')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use(errorHandler());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Initialize the prismic.io api
const initApi = (req) => {
   return Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
     accessToken: process.env.PRISMIC_ACCESS_TOKEN,
     req,
     fetch,
   });
};

// Link Resolver
const linkResolver = (doc) => {
  if (doc.type === 'home') {
    return '/'
  } else if (doc.type === 'about') {
    return '/about';
  } else if (doc.type === 'services') {
    return '/services';
  } else if (doc.type === 'service') {
    return `/service/${doc.uid}`;
    // return '/about/' + doc.uid;
  }

  // Default to homepage
  return '/';
}

// Middleware to inject prismic context
app.use((req, res, next) => {
  // console.log(req.headers)
  const ua = uaParser(req.headers['user-agent']);
  // console.log(ua)
  res.locals.isDesktop = ua.device.type === undefined;
  res.locals.isPhone = ua.device.type === 'mobile';
  res.locals.isTablet = ua.device.type === 'tablet';

  res.locals.link = linkResolver;

  res.locals.PrismicH = PrismicH;
  next();
});

// =======================All the routes - these can have their own file/folder========================

const handleRequest = async (api) => {
  const assets = []
  const meta = await api.getSingle('metadata');
  const preloader = await api.getSingle('preloader');
  const projects = await api.getAllByType('project');
  const services = await api.getAllByType('service');
  const navigation = await api.getSingle('navigation');
  // console.log(projects);
  const allProjects = []
  projects.forEach((project, index) => {
    allProjects[index] = {}
    allProjects[index].projectIndex = index;
    allProjects[index].name = project.uid;
    allProjects[index].imageUrl = project.data.image.url;
    allProjects[index].imageAlt = project.data.image.alt;
    allProjects[index].category = project.data.service.slug;
    allProjects[index].tags = []
    project.data.tags.forEach(item => {
      allProjects[index].tags.push(item.tag.slug)
    })
  });
  const projectsColumns = []
  const projectsCol1 = []
  const projectsCol2 = []
  const projectsCol3 = []
  allProjects.forEach((project, index) => {
    if (index % 3 === 0) {
      allProjects[index].projectColumn = "col3"
      projectsCol3.push(project)
    } else if (index % 2 === 0) {
      allProjects[index].projectColumn = "col2"
      projectsCol2.push(project)
    } else {
      allProjects[index].projectColumn = "col1"
      projectsCol1.push(project)
    }
  })
  projectsColumns.push(projectsCol1, projectsCol2, projectsCol3)
  projectsColumns.forEach((column, index) => {
    column.forEach((project) => {
      if (project.projectColumn === 'col3') {
        // console.log(project);
      }
    })
  })

  // module.exports = {allProjects};
  return {
    meta,
    preloader,
    navigation,
    assets,
    allProjects,
    projectsColumns,
    projectsCol1,
    projectsCol2,
    projectsCol3,
  };
};

// export { handleRequest };
// const defaults = async (req) => {
//   const api = await initApi(req);
// };

app.get('/projectresults', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);

  res.json(defaults.allProjects);

  // res.render('pages/about', {
  //   allProjects: defaults.allProjects,
  //   ...defaults,
  // });
});

app.get('/', async (req, res) => {
  const api = await initApi(req);
  const home = await api.getSingle('home');
  const defaults = await handleRequest(api);
  const services = await api.getAllByType('service');

  res.render('pages/home', {
    home: home.data,
    ...defaults,
    services: services,
  });

})

app.get('/about', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const aboutme = await api.getAllByType('aboutme');

  res.render('pages/about', {
    allProjects: defaults.allProjects,
    ...defaults,
    aboutme: aboutme[0].data,
    info: aboutme[0].data.aboutmeinfo[0],
  });
});

app.get('/projects', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  // console.log(defaults.projectsColumns);
  res.render('pages/projects', {
    allProjects: defaults.allProjects,
    ...defaults,
    projectsColumns: defaults.projectsColumns,
    projectsCol1: defaults.projectsCol1,
    projectsCol2: defaults.projectsCol2,
    projectsCol3: defaults.projectsCol3,
  });
});

// app.get('/about/:uid', async (req, res) => {
//   try {
//     const api = await initApi(req)
//     const portfolio = await api.getByUID('portfolio_item', req.params.uid)
//     res.render('pages/portfolio', { portfolio: portfolio.data })
//   } catch (err) {
//     res.render('pages/Four04')
//   }
// })

// =====================================Undefined routes error handling==================
app.all('*', async (req, res, next) => {
  res.render('pages/Four04')
})

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Code 500: Something Went Wrong'
  res.status(statusCode).send(err.message)
})

// =======================Connecting to port====================================
app.listen(process.env.PORT || port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
