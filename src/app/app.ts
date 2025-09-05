import { Component, signal } from '@angular/core';
import { Navbar } from "./user/pages/navbar/navbar";
import { Home } from "./user/pages/home/home";
import { About } from "./user/pages/about/about";
import { Projects } from "./user/pages/projects/projects";
import { Contact } from "./user/pages/contact/contact";
import { Footer } from "./common/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Navbar, Home, About, Projects, Contact, Footer ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-portfolio');
}
