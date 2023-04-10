/* eslint-disable no-unused-vars */
require('dotenv').config();

const logger = require('morgan');
const express = require('express');
const errorHandler = require('errorhandler');

const fetch = require('node-fetch');
const Prismic = require('@prismicio/client');
const PrismicH = require('@prismicio/helpers');
const PrismicR = require('@prismicio/richtext');

const UAParser = require('ua-parser-js');

const nodemailer = require('nodemailer');

const port = process.env.PORT || 8004;
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

app.set('view engine', 'pug');
// app.locals.basedir = __dirname;
app.set('views', path.join(__dirname, 'views'));
app.locals.basedir = path.join(__dirname, 'views');

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

// Add the 'urlencoded' middleware before the 'ua-parser' middleware
app.use(express.urlencoded({ extended: true }));

// Middleware to inject prismic context
app.use((req, res, next) => {
  // console.log(req.headers)
  const ua = UAParser(req.headers['user-agent']);
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
    allProjects[index].videoUrl = project.data.videourl;
    allProjects[index].type = project.data.type;
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
      if(project){
        allProjects[index].projectColumn = "col1"
        projectsCol1.push(project)
      }
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

  // eslint-disable-next-line array-callback-return
  const renderProjects = allProjects.map((project) => {
    if (project.category === 'renderings') {
      return project;
    }
  });

  // eslint-disable-next-line array-callback-return
  const interactiveProjects = allProjects.map((project) => {
    if (project.category === 'interactive') {
      if(project){
        return project;
      }
    }
  });

  // eslint-disable-next-line array-callback-return
  const animationProjects = allProjects.map((project) => {
    if (project.category === 'animation') {
      return project;
    }
  });

  // eslint-disable-next-line array-callback-return
  const modelingProjects = allProjects.map((project) => {
    if (project.category === '3d-modeling') {
      return project;
    }
  });

  // eslint-disable-next-line array-callback-return
  const virtualRealityProjects = allProjects.map((project) => {
    if (project.category === 'virtual-reality') {
      return project;
    }
  });

  // eslint-disable-next-line array-callback-return
  const panoramaProjects = allProjects.map((project) => {
    if (project.category === 'panorama') {
      return project;
    }
  });

  // eslint-disable-next-line array-callback-return
  const web3dProjects = allProjects.map((project) => {
    if (project.category === 'web-3d') {
      return project;
    }
  });

  // module.exports = {allProjects};
  return {
    meta,
    preloader,
    navigation,
    assets,
    allProjects,
    renderProjects,
    interactiveProjects,
    animationProjects,
    modelingProjects,
    virtualRealityProjects,
    panoramaProjects,
    web3dProjects,
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
});



app.get('/', async (req, res) => {
  const api = await initApi(req);
  const home = await api.getSingle('home');
  const defaults = await handleRequest(api);
  const services = await api.getAllByType('service');
  const aboutme = await api.getAllByType('aboutme');

  res.render('pages/home', {
    home: home.data,
    ...defaults,
    services: services,
    aboutme: aboutme[0].data,
    info: aboutme[0].data.aboutmeinfo[0],
  });

})

app.post('/send', (req, res) => {
  // Get the user agent string from the request headers
  const parser = new UAParser();
  const ua = parser.setUA(req.headers['user-agent']).getResult();

  // Extract the data from the form submission
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const subject = req.body.subject;

  // Log the data to the console
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log(`Subject: ${subject}`);

  // Create a transporter object to send emails
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // Define the email options
  const mailOptions = {
    from: `${email}`,
    to: process.env.MAIL_USER,
    subject: `New message from ${email}: ${subject} `,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nUser agent: ${ua.ua}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  });

  // res.send('Form submitted successfully');
});

app.get('/contactform', async (req, res) => {
  const api = await initApi(req);
  const home = await api.getSingle('home');
  const defaults = await handleRequest(api);
  const services = await api.getAllByType('service');
  const aboutme = await api.getAllByType('aboutme');

  res.render('_includes/contact-form', {
    home: home.data,
    ...defaults,
    services: services,
    aboutme: aboutme[0].data,
    info: aboutme[0].data.aboutmeinfo[0],
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





app.get('/renderings', async (req, res) => {
      const api = await initApi(req)
      const defaults = await handleRequest(api);
      const allProjects = defaults.allProjects
      const renderProjects = defaults.renderProjects;
      const renders = await createColumns(renderProjects);

      res.render('pages/services/renderings', {
        ...defaults,
        columns: renders.Columns,
        col1: renders.Col1,
        col2: renders.Col2,
        col3: renders.Col3,
        projects: renders.projects,
      });
})

app.get('/interactive', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const allProjects = defaults.allProjects;
  const interactiveProjects = defaults.interactiveProjects;
  const interactive = await createColumns(interactiveProjects);

  res.render('pages/services/interactive', {
    ...defaults,
    columns: interactive.Columns,
    col1: interactive.Col1,
    col2: interactive.Col2,
    col3: interactive.Col3,
    projects: interactive.projects,
  });
});

app.get('/animation', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const allProjects = defaults.allProjects;
  const animationProjects = defaults.animationProjects;
  const animation = await createColumns(animationProjects);

  res.render('pages/services/animation', {
    ...defaults,
    columns: animation.Columns,
    col1: animation.Col1,
    col2: animation.Col2,
    col3: animation.Col3,
    projects: animation.projects,
  });
});

app.get('/modeling', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const allProjects = defaults.allProjects;
  const modelingProjects = defaults.modelingProjects;
  const modeling = await createColumns(modelingProjects);

  res.render('pages/services/modeling', {
    ...defaults,
    columns: modeling.Columns,
    col1: modeling.Col1,
    col2: modeling.Col2,
    col3: modeling.Col3,
    projects: modeling.projects,
  });
});

app.get('/virtualreality', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const allProjects = defaults.allProjects;
  const virtualRealityProjects = defaults.virtualRealityProjects;
  const virtualReality = await createColumns(virtualRealityProjects);

  res.render('pages/services/virtualreality', {
    ...defaults,
    columns: virtualReality.Columns,
    col1: virtualReality.Col1,
    col2: virtualReality.Col2,
    col3: virtualReality.Col3,
    projects: virtualReality.projects,
  });
});

app.get('/panorama', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const allProjects = defaults.allProjects;
  const panoramaProjects = defaults.panoramaProjects;
  const panorama = await createColumns(panoramaProjects);

  res.render('pages/services/panorama', {
    ...defaults,
    columns: panorama.Columns,
    col1: panorama.Col1,
    col2: panorama.Col2,
    col3: panorama.Col3,
    projects: panorama.projects,
  });
});

app.get('/web3d', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const allProjects = defaults.allProjects;
  const web3dProjects = defaults.web3dProjects;
  const web3d = await createColumns(web3dProjects);

  res.render('pages/services/web3d', {
    ...defaults,
    columns: web3d.Columns,
    col1: web3d.Col1,
    col2: web3d.Col2,
    col3: web3d.Col3,
    projects: web3d.projects,
  });
});

app.get('/serviceresults', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const web3dProjects = defaults.web3dProjects;
  const web3ds = await createColumns(web3dProjects);

  res.json(web3ds.projects);
});

function createColumns (allProjects) {
    const Columns = [];
    const Col1 = [];
    const Col2 = [];
    const Col3 = [];
    const projects = []
    allProjects.forEach((project, index) => {
      if (project) {
        allProjects[index].projectIndex = index;
        projects.push(project);
      }
    });
    projects.forEach((project, index) => {
       if (index % 3 === 0) {
         if (project) {
           projects[index].projectColumn = 'col3';
           Col3.push(project);
         }
       } else if (index % 2 === 0) {
         if (project) {
           projects[index].projectColumn = 'col2';
           Col2.push(project);
         }
       } else {
         if (project) {
           projects[index].projectColumn = 'col1';
           Col1.push(project);
         }
       }
    });
    Columns.push(Col1, Col2, Col3);
    return {
      Columns,
      Col1,
      Col2,
      Col3,
      projects,
    };
}

// app.get('/service/:uid', async (req, res) => {
//       const api = await initApi(req)
//       const defaults = await handleRequest(api);
//       const service = await api.getByUID('service', req.params.uid);
//       const uid = req.params.uid;
//       console.log(req.params.uid);
//       res.render('pages/service', {
//         service: service.data,
//         serviceName: uid,
//         allProjects: defaults.allProjects,
//         ...defaults,
//       });
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
