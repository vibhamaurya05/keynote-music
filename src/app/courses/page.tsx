"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import CourseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
interface Courses {
	id: number;
	title: string;
	slug: string;
	description: string;
	price: number;
	instructor: string;
	isFeatured: boolean;
	image: string;
}

function page() {
	return (
		<div className="min-h-screen bg-black py-12 pt-36">
			<BackgroundBeams />
			<h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-6 text-white">All Courses {CourseData.courses.length}</h1>
			<div className="flex flex-wrap justify-center ">
				{CourseData.courses.map((course: Courses) => (
					<CardContainer className="inter-var mx-10" key={course.id}>
						<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
							<CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
								{course.title}
							</CardItem>
							<CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
								{course.description}
							</CardItem>
							<CardItem translateZ="100" className="w-full mt-4">
								<Image src={course.image} height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
							</CardItem>
							<div className="flex justify-between items-center mt-20">
								<CardItem translateZ={20} as={Link} href="https://twitter.com/mannupaaji" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
									Try now →
								</CardItem>
								<CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
									Sign up
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				))}
			</div>
		</div>
	);
}

export default page;