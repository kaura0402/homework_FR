import type {FC} from "react";
import type {ISourseModel} from "../../model/SourseModel.ts";
import {CourseComponent} from "../sourse-component/CourseComponent.tsx";
import './SoursesComponent.css';

interface SoursesProps {
    courses: ISourseModel[];
}

export const SoursesComponent:FC<SoursesProps> = ({courses}) => {
    return (
        <div>
            <h2 className="title">Перелік курсів</h2>
            {courses.map((course:ISourseModel) => (
                <CourseComponent key={course.title} course={course} children={undefined} />
            ))}

        </div>
    );
};