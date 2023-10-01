import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A10() {
  const pageNum = 10;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a10.png' title='난민 수용에 대한 내 생각에 더 가까운 것은?'/>
    <SurveyButton first='인도주의적 측면에서 가능한 많은 난민을 받아줘야 해요' second='사회에 미칠 영향을 고려해 가능한 적은 난민만 받아야 해요' src={pageNum + 1}/>
    </div>
  )
}