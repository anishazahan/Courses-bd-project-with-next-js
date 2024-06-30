import { getCourses } from "@/BackendService/queries/courses";
import Test from "@/components/Test";

export default async function Home() {
  const data = await getCourses();
  console.log(data);
  return (
    <>
      ....,,,,,
      <Test />
      ...........
    </>
  );
}
