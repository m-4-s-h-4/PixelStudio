import { gql } from "graphql-request";
import { client } from "../lib/client";

type ServiceInfo = {
  info1: string;
  info2: string;
  info3: string;
};

type ServiceInfoQueryResult = {
  serviceInfos: ServiceInfo[];
};

const ServiceInfoQuery = gql`
  query ServiceInfo {
    serviceInfos {
      info1
      info2
      info3
    }
  }
`;

export default async function ServiceInfoComponent() {
  const { serviceInfos }: ServiceInfoQueryResult =
    await client.request(ServiceInfoQuery);

  const firstServiceInfo = serviceInfos[0];

  return (
    <div>
      <p>{firstServiceInfo.info1}</p>
      <p>{firstServiceInfo.info2}</p>
      <p>{firstServiceInfo.info3}</p>
    </div>
  );
}
