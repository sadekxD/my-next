import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getAllPostIds } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export default function Home({ paths }) {
	console.log(paths);
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hi I'am Irfan Sadek. I'm a software engineer.</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{" "}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			<h3 className={utilStyles.headingXl}>All available posts</h3>
			{paths.map(({ params }) => {
				return (
					<div key={params.id}>
						<Link href={`/posts/${params.id}`}>
							<a className={utilStyles.link}>{params.id}</a>
						</Link>
						<br />
					</div>
				);
			})}
		</Layout>
	);
}

export async function getStaticProps() {
	const paths = getAllPostIds();
	return {
		props: {
			paths,
		},
	};
}
