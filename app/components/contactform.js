import gsap from 'gsap';
import XMLHttpRequest from 'xhr2';
// import Page from '../classes/page';

export default class ContactForm  {
  constructor() {

    this.closeContactForm = document.querySelector('.form-container #close');
    this.openContactForm = document.querySelectorAll('#contact');
    this.input = document.querySelectorAll('input');
    this.contactForm = document.querySelector('.form-container');
    this.submitBtn = document.querySelector('.submit-button');
    this.name = document.getElementById('name')
    this.email = document.getElementById('email')
    this.subject = document.getElementById('subject')
    this.message = document.getElementById('message')
    this.content = document.querySelector('.content');
  }

  createForm() {
    const self = this;
    this.openContactForm.forEach((item) => {
      item.addEventListener('click', () => {
        console.log('open form');
        self.content.classList.add('fixed');
        this.contactForm.classList.remove('closed');
        gsap.fromTo(
          '.form-container',
          {
            xPercent: 100,
          },
          {
            xPercent: 0,
            duration: 0.4,
            ease: 'power1.out',
          }
        );
        this.submit()
      });
    });
    this.closeContactForm.addEventListener('click', () => {
      self.content.classList.remove('fixed');
      gsap.to('.form-container', {
        xPercent: 100,
        duration: 0.4,
        ease: 'power1.out',
        onComplete: () => {
          this.contactForm.classList.add('closed');
        },
      });
      // ;
    });

  }

  submit() {
    // if (!this.contactform) return;
    this.submitBtn.addEventListener('click', async(e) => {
      e.preventDefault();
      this.formData = {
        name: this.name.value,
        email: this.email.value,
        subject: this.subject.value,
        message: this.message.value,
      };
      if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
        window.alert('Please fill out all fields');
        e.preventDefault();
        return false;
      }else{
        this.sendEmail()
      }


    });
  }

  sendEmail() {
      console.log(this.formData, 'form submit');
      // Send the form data to the server
      window
        .fetch('/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `name=${encodeURIComponent(
            this.formData.name
          )}&email=${encodeURIComponent(
            this.formData.email
          )}&subject=${encodeURIComponent(
            this.formData.subject
          )}&message=${encodeURIComponent(this.formData.message)}`,
        })
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          if (result.includes('success')) {
            this.name.value = '';
            this.email.value = '';
            this.subject.value = '';
            this.message.value = '';
            window.alert('Your message has been sent.');
          } else {
            window.alert('There was an error sending your message.');
          }
        })
        .catch((error) => {
          console.error(error);
          window.alert('There was an error sending your message.');
        });
  }
}
