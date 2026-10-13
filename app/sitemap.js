export default function sitemap() {
  const routes = ["", "/about", "/courses", "/admissions", "/mentors", "/achievements", "/gallery", "/contact", "/notices", "/cookie-policy"];
  return routes.map((path) => ({ url: path || "/", lastModified: new Date() }));
}
