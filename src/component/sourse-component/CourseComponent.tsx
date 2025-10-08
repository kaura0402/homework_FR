import {type FC, type ReactNode} from "react";
import type {ISourseModel} from "../../model/SourseModel.ts";
import './CourseComponent.css';

interface CourseProps {
    course: ISourseModel;
    children: ReactNode;
}

export const CourseComponent:FC<CourseProps> = ({course, children}:CourseProps) => {
    return (
        <div className= 'course'>
            <h2>{course.title}</h2>
            <p>Month duration: {course.monthDuration}</p>
            <p>Hour duration: {course.hourDuration}</p>
            <p>Modules: {course.modules.join(', ')}</p>
            {children}
        </div>
    );
};