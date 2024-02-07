import { gql } from "graphql-request";
import { client } from "../lib/client";
import Link from "next/link";

type Template = {
  title: string;
  id: string;
  thumbnail: {
    url: string;
  };
  startPrice: number;
  price: number;
  techSummary: string;
  summary: string;
};

type TemplatesQueryResult = {
  services: Template[];
};

const TemplatesQuery = gql`
  query Templates {
    services {
      title
      id
      thumbnail {
        url
      }
      price
    }
  }
`;

export default async function TemplatesComponent() {
  const { services }: TemplatesQueryResult =
    await client.request(TemplatesQuery);

  return (
    <div>
      {services.map((template: Template, templateIndex: number) => {
        return (
          <div key={templateIndex}>
            <Link href={`services/${template.id}`}>
              <div>
                <h1>{template.title}</h1>
              </div>
            </Link>
            <img src={template.thumbnail.url} alt={template.title} />
            <p>Start Price:</p>
            <p>{template.price} £</p>
          </div>
        );
      })}
    </div>
  );
}
