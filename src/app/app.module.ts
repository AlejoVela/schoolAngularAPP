import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { CreateStudentComponent } from './home/create-student/create-student.component';
import { CreateTeacherComponent } from './home/create-teacher/create-teacher.component';
import { CreateClassComponent } from './home/create-class/create-class.component';
import { CreateCourseComponent } from './home/create-course/create-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
//services
import { ClassService } from '../app/services/class.service';
import { CourseService } from '../app/services/course.service';
import { StudentService } from '../app/services/student.service';
import { TeacherService } from '../app/services/teacher.service';
import { TokenInterceptorService } from '../app/services/token-interceptor.service';

//guard
import { AuthGuard } from './guards/auth.guard';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateStudentComponent,
    CreateTeacherComponent,
    CreateClassComponent,
    CreateCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    ClassService,
    CourseService,
    StudentService,
    TeacherService,
    TokenInterceptorService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
