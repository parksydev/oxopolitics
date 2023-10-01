import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A8() {
  const pageNum = 8;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a8.png' title='사회 양극화에 대한 내 생각에 더 가까운 것은?'/>
    <SurveyButton first='정부가 양극화 문제 해결을 위한 정책을 더 많이 펼쳐야 해요' second='양극화는 시장의 자연스러운 결과이며 개인의 노력이 중요해요' src={pageNum + 1}/>
    </div>
  )
}