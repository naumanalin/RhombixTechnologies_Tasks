import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../constants';

const SingleProject = () => {
  const { id } = useParams(); // Destructure `id` from `useParams`
  const project = projects.at(id);

  // Handle case where project is not found
  if (!project) {
    return <div className="text-center text-red-500">Project not found</div>;
  }

  return (
    <div className="container mx-auto p-6 pb-32">
      <img className="w-full rounded-lg" src={project.image} alt={`${project.name} preview`} />
      <h1 className="text-2xl font-bold mt-8">{project.name}</h1>

      <div className="flex items-center">
        <h2 className="text-lg">Technologies:</h2>
        <div className="flex">
          {project.tags.map((tag, index) => (
            <p key={index} className={`px-3 py-1 rounded-md ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </div>

      <p className="mt-4 text-gray-700">{project.description}</p>

      <div className="mt-6 flex gap-4">
        {project.source_code_link && (
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            View Source Code
          </a>
        )}
        {project.livePreview && (
          <a
            href={project.livePreview}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Live Preview
          </a>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
