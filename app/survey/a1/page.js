import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A1() {
  const pageNum = 1;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a1.png' title='사회복지에 대한 정부의 역할은?'/>
    <SurveyButton first='가능한 적극적으로 지원하는 거죠' second='가능한 개인과 시장에 맡기는 거죠' src={pageNum + 1}/>
    </div>
  )
}