import Project from '../Project';
import { projects as data } from '../../data.json';

console.log(data);

export default function Projects({ children }) {
  return (
    <div className="grid gap-12 container mx-auto py-8 px-4">
      {data.map(([section, projects], index) => {
        return (
          <div key={index}>
            <h2 className="mb-8 text-5xl font-bold">{section}</h2>
            {children}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => {
                return <Project {...project} key={index} />
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
}