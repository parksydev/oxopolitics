import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A13() {
  const pageNum = 13;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a13.png' title='국제 무역 및 글로벌화에 대한 내 생각에 더 가까운 것은?'/>
    <SurveyButton first='자유 무역과 글로벌화를 통해 경제 성장을 이끌 수 있어요' second='보호무역주의를 통해 국내 산업과 고용을 지켜나가야 해요' src={pageNum + 1}/>
    </div>
  )
}