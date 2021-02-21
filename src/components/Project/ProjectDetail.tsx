import { gql, useQuery } from "@apollo/client";
import * as React from "react";
import { useParams } from "react-router-dom";
import useProject from "../../contexts/ProjectContext";
import { ProjectDTO } from "../../DTO/ProjectDTO";
import ProductCard from "../Product/ProductCard";
import ProjectInfo from "./ProjectInfo";
import ProjectTabs from "./ProjectTabs";

export default function ProjectDetail() {
  const { state: project, dispatch } = useProject();
  React.useEffect(() => {
    console.log(project);
  }, [project]);
  if (project) {
    return (
      <div>
        <ProjectInfo />
        <hr className="my-2" />
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3">
            <ProjectTabs />
          </div>
          <div>
            {project.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <p>Loading</p>;
}
