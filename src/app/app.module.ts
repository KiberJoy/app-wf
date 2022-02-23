import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { UserCardComponent } from './components/shared/user-card/user-card.component';
import { RegistrationFormComponent } from './components/shared/registration-form/registration-form.component';
import { WrapperComponent } from './components/shared/wrapper/wrapper.component';
import { RadioButtonComponent } from './components/shared/radio-button/radio-button.component';
import { HttpClientModule } from '@angular/common/http';
import { AbstractComponent } from './components/abstract/abstract.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { TooltipComponent } from './components/shared/tooltip/tooltip.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    UserCardComponent,
    RegistrationFormComponent,
    WrapperComponent,
    RadioButtonComponent,
    AbstractComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    TooltipComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
