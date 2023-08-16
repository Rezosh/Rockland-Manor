import amenitiesDining from "../../../public/amenities-dining.jpg";

export const images: string[] = [amenitiesDining.src];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
