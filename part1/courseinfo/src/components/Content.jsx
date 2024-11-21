import { Part } from './Part'

export const Content = ({ course }) => (
  <>
    <Part part={course.parts[0]} />
    <Part part={course.parts[1]} />
    <Part part={course.parts[2]} />
  </>
)
