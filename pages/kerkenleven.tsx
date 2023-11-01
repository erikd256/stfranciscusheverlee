import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { Parochiebladeren } from "../components/weeknieuws";
import { client } from "../tina/__generated__/client";
import { Layout } from "../components/layout";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const posts = props.data.weeknieuwsConnection.edges;

  return (
    <Layout>
      <Section className="flex-1">
        <Container size="large">
          <Parochiebladeren data={posts} />
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.weeknieuwsQuery();
  return {
    props: {
      ...tinaProps,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
