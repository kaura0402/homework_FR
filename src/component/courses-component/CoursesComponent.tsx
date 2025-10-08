import coursesAndDurationArray from "../../arrays.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
import type {CourseModel} from "../../models/CourseModel.ts";
import './CoursesComponent.css'
export const CoursesComponent = () => {

    return (
        <div>
            {
                coursesAndDurationArray.map((course:CourseModel) => {

                    return <CourseComponent course={course}/>
                })
            }
        </div>
    );
};