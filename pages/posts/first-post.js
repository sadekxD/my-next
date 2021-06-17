import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Post = () => {
	return (
		<>
			<Head>
				<title>my first post</title>
			</Head>
			<div>
				<h1 className="header">
					Hello this is the first page{" "}
					<Link href="/">
						<a className="link">Back to home</a>
					</Link>
				</h1>

				<Image src="/images/profile.jpg" alt="sadek" height={144} width={144} />
				<style jsx>{`
					.header {
						font-size: 2rem;
					}

					.link {
						color: blue;
						transition: 0.2s all ease;
					}
					.link:hover {
						color: yellow;
					}
				`}</style>
			</div>
		</>
	);
};

export default Post;
