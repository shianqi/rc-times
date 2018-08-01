
import React from 'react';
import TimePicker from '../src/components';

class TimePickerWrapper extends React.Component {
  render() {
    return (
      <div className="exampleWrapper">

        <div className="exampleColumn">
          <div className="exampleRow">
            <h3>And you can even do this</h3>
            <div className="exampleColumn">
              <div className="exampleRow">
                <TimePicker
                  sections={[
                    {
                      prefix: 'Every',
                      times: ['Day', 'Week', 'Month', 'Quarter', 'Year'],
                    }
                  ]}
                  color="yellow"
                />
              </div>
              <div className="exampleSubText">at</div>
              <div className="exampleRow exampleRowSub">
                <TimePicker
                  sections={[
                    {
                      from: 0,
                      to: 12,
                      suffix: 'Clock'
                    }
                  ]}
                  color="yellow"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="exampleColumn">
          <div className="exampleRow">
            <h3>With outside className propsto make it bigger</h3>
            <div className="exampleColumn">
              <div className="exampleRow">
                <TimePicker
                  sections={[
                    {
                      prefix: 'Every',
                      times: ['Day', 'Week', 'Month', 'Quarter', 'Year'],
                    }
                  ]}
                  color="yellow"
                  className="examplePicker"
                  timerClassName="exampleTimer"
                />
              </div>
              <div className="exampleSubText">at</div>
              <div className="exampleRow exampleRowSub">
                <TimePicker
                  sections={[
                    {
                      from: 0,
                      to: 12,
                      suffix: 'Clock'
                    }
                  ]}
                  color="yellow"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default TimePickerWrapper;