import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClassComponent } from './home/create-class/create-class.component';
import { CreateCourseComponent } from './home/create-course/create-course.component';
import { CreateStudentComponent } from './home/create-student/create-student.component';
import { CreateTeacherComponent } from './home/create-teacher/create-teacher.component';

const routes: Routes = [
  {
    path: '',
    component: CreateStudentComponent,
    pathMatch: 'full',
  },
  {
    path: 'createTeacher',
    component: CreateTeacherComponent,
    pathMatch: 'full',
  },
  {
    path: 'createCourse',
    component: CreateCourseComponent,
    pathMatch: 'full',
  },
  {
    path: 'createClass',
    component: CreateClassComponent,
    pathMatch: 'full',
  },
  {
    path: 'createStudent',
    component: CreateStudentComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
