export default function QualityEvaluation() {
  return (
    <div className="quality-eval">
      <div className="quality-eval--detail">
        <div>
          <label className="quality-eval--label" id="">
            Güclü tərəflər:
          </label>
          <textarea
            className="quality-eval--textarea strong-areas"
            id=""
            rows={6}
          ></textarea>
        </div>
        <div className="quality-eval--div">
          <i className="fas fa-info-circle inline"></i>
          <p className="quality-eval--info">
            Zəhmət olmasa bu bölməni qiymətləndirmənin sonlarında doldurun
          </p>
        </div>
      </div>
      <div className="quality-eval--detail">
        <div>
          <label className="quality-eval--label" id="">
            Təkmilləşdirməyə ehtiyac olan sahələr:
          </label>
          <textarea
            className="quality-eval--textarea improvements"
            id=""
            rows={6}
          ></textarea>
        </div>
        <div className="quality-eval--div">
          <i className="fas fa-info-circle inline"></i>
          <p className="quality-eval--info">
            Zəhmət olmasa bu bölməni qiymətləndirmənin sonlarında doldurun
          </p>
        </div>
      </div>
    </div>
  );
}
