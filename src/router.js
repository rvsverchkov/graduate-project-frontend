import { createRouter, createWebHistory } from "vue-router";
import startPage from './pages/startPage.vue';
import signInPage from './pages/signInPage.vue';
import signUpPage from './pages/signUpPage.vue';
import coursesPage from './pages/coursesPage.vue';
import courseOfficePage from './pages/courseOfficePage.vue';
import courseEmailPage from './pages/courseEmailPage.vue';
import coursePhishingPage from './pages/coursePhishingPage.vue';
import mePage from './pages/mePage.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Start',
            path: '/', 
            component: startPage,
            meta: {
                showSignInButton: false,
                showSignUpButton: true
            }
        },
        {
            name: 'SignIn',
            path: '/signin', 
            component: signInPage,
            meta: {
                showSignInButton: false,
                showSignUpButton: true
            }
        },
        { 
            name: 'SignUp',
            path: '/signup', 
            component: signUpPage,
            meta: {
                showSignInButton: true,
                showSignUpButton: false
            }
        },
        {
            name: 'Courses',
            path: '/courses',
            component: coursesPage,
            meta: {
                needAuth: true
            }
        },
        {
            name: 'CourseOffice',
            path: '/courses/office',
            component: courseOfficePage,
            meta: {
                needAuth: true
            }
        },
        {
            name: 'CourseEmail',
            path: '/courses/email',
            component: courseEmailPage,
            meta: {
                needAuth: true
            }
        },
        {
            name: 'CoursePhishing',
            path: '/courses/phishing',
            component: coursePhishingPage,
            meta: {
                needAuth: true
            }
        },
        {
            name: 'Me',
            path: '/users/me',
            component: mePage,
            meta: {
                needAuth: true,
                showLogOutButton: true
            }
        }
    ] 
})
