import Home from "@/components/Home";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";


const routes = [
    { path: "/", component: Home },
    { path: "/contact", component: Contact },
    { path: "/blog", component: Blog },
    { path: "/projects", component: Projects }
];

export default routes;
