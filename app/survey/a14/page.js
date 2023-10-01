import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A14() {
  const pageNum = 14;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a14.png' title='아동수당 등 육아를 위한 국가 지원은?'/>
    <SurveyButton first='아이를 키우는 모든 가정에 줘야 해요' second='소득 기준에 따라 다르게 줘야 해요' src={pageNum + 1}/>
    </div>
  )
}