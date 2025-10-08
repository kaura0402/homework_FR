import type {CourseModel} from "../../models/CourseModel.ts";
import './CourseComponent.css'

type PropsType = {
    course: CourseModel;
}

export const CourseComponent: React.FC<PropsType> = ({course}:PropsType) => {
    return (
        <div>
            <h2>{course.title}</h2>

            <p>monthDuration: {course.monthDuration}</p>
        </div>
    );
};