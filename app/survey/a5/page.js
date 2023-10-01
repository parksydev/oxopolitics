import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A5() {
  const pageNum = 5;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a5.png' title='혼인 • 성별과 관계없이 다양한 형태의 가족을?'/>
    <SurveyButton first='법적으로 인정해 줘야 해요' second='법적으로 인정할 수 없어요' src={pageNum + 1}/>
    </div>
  )
}