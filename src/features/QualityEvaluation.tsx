import TextArea from 'antd/es/input/TextArea';
import { BadgeInfo } from 'lucide-react';

export default function QualityEvaluation() {
  return (
    <div className="quality-eval">
      <div className="quality-eval--detail">
        <div>
          <label className="quality-eval--label" id="">
            Güclü tərəflər:
          </label>
          <TextArea
            className={`quality-eval--textarea ${
              window.currentRole === 'MANAGER' ? '' : 'not-allowed'
            }`}
            readOnly={window.currentRole === 'MANAGER' ? false : true}
            id=""
            autoSize={{ minRows: 4 }}
          />
        </div>
        <div className="quality-eval--div">
          <BadgeInfo color="#ff0000" size={16} />
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
          <TextArea
            className={`quality-eval--textarea ${
              window.currentRole === 'MANAGER' ? '' : 'not-allowed'
            }`}
            readOnly={window.currentRole === 'MANAGER' ? false : true}
            id=""
            autoSize={{ minRows: 4 }}
          />
        </div>
        <div className="quality-eval--div">
          <BadgeInfo color="#ff0000" size={16} />
          <p className="quality-eval--info">
            Zəhmət olmasa bu bölməni qiymətləndirmənin sonlarında doldurun
          </p>
        </div>
      </div>
    </div>
  );
}
