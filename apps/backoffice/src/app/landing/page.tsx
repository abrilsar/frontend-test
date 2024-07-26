import Card from '@/components/card/Card';
import Stats from '@/components/stats/Stats';
import CustomButton from '@/components/custom-button/CustomButton';
import Input from '@/components/input/Input';
import Footer from '@/components/footer/Footer';
import ImageCard from '@/components/image-card/ImageCard';
import QuestionField from '@/components/question-field/QuestionField';
// import Navbar from "@/components/navbar/Navbar";
// import Title from "@/components/title/Title";

export default function Landing() {
  return (
    <div className="flex justify-center items-center">
      {/* <CustomButton title="Learn more" custom={false}></CustomButton> */}

      {/* <Title
                title="Get more value from your tools"
                text="Connect your tools, connect your teams. With over 100 apps already available in our directory, your team's favourite tools are just a click away."
                subtitle="Integrations"
            ></Title> */}
      {/* <Card></Card> */}
      {/* <Stats></Stats> */}
      {/* <Input></Input> */}
      {/* <Footer></Footer> */}
      {/* <ImageCard></ImageCard> */}
      <QuestionField></QuestionField>
    </div>
  );
}
