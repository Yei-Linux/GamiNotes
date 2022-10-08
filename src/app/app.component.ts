import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  iconPackExtensionFromBootstrapIcons: SafeHtml = '';

  constructor(private router: Router, private sanitizer: DomSanitizer) {}

  //TODO: Use httpClient
  async injectIconPackIntoApp() {
    try {
      const response = await fetch('./assets/gaminotes-icons.svg');
      const iconPack = await response.text();
      const iconPackSanitized =
        this.sanitizer.bypassSecurityTrustHtml(iconPack);
      this.iconPackExtensionFromBootstrapIcons = iconPackSanitized;
    } catch (error) {
      console.warn('Error: ', error);
    }
  }

  ngOnInit() {
    this.injectIconPackIntoApp();
  }
}
