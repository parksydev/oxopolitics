import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A9() {
  const pageNum = 9;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a9.png' title='원하는 사람만 군대를 가는 모병제는?'/>
    <SurveyButton first='우리나라에 필요해요' second='우리나라에 필요하지 않아요' src={pageNum + 1}/>
    </div>
  )
}