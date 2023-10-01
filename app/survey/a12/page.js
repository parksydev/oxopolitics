import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A12() {
  const pageNum = 12;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a12.png' title='범죄나 테러를 해결하기 위해 더 좋은 방법은?'/>
    <SurveyButton first='철저한 법 집행과 강력한 처벌로 범죄를 억제하는 거예요' second='사회적 불평등 해소와 교육의 기회를 확대하는 거예요' src={pageNum + 1}/>
    </div>
  )
}