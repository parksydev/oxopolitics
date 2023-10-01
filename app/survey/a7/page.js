import Header from "@/app/component/Header";
import SurveyBar from "@/app/component/SurveyBar";
import SurveyMain from "@/app/component/SurveyMain";
import SurveyButton from "@/app/component/SurveyButton";

export default function A7() {
  const pageNum = 7;
  const width = pageNum * 6.6;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
    <Header />
    <SurveyBar num={`${pageNum}/15`} width={`${width}%`} />
    <SurveyMain src='/img/survey-a7.png' title='외국인 불법체류자의 자녀에게 의무교육을?'/>
    <SurveyButton first='제공해야 해요. 교육은 어린이의 권리니까요!' second='제공하면 안 돼요. 불법체류를 조장할 수 있어요!' src={pageNum + 1}/>
    </div>
  )
}