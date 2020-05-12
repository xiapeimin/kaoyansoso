import React, {Component} from 'react';
import AudioAnalyser from "react-audio-analyser";


export default class Recorder extends Component{
    constructor(props) {
        super(props)
        this.state = {
            status: ""
        }
    }

    componentDidMount() {
    }

    controlAudio(status) {
        this.setState({
            status
        })
    }

    changeScheme(e) {
        this.setState({
            audioType: e.target.value
        })
    }

    render() {
        console.log(this.state.audioSrc);
        const {status, audioSrc, audioType} = this.state;
        const audioProps = {
            audioType,
            // audioOptions: {sampleRate: 30000}, // 设置输出音频采样率
            status,
            audioSrc,
            timeslice: 1000, // timeslice（https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start#Parameters）
            startCallback: (e) => {
                console.log("succ start", e)
            },
            pauseCallback: (e) => {
                console.log("succ pause", e)
            },
            stopCallback: (e) => {
                this.setState({
                    audioSrc: window.URL.createObjectURL(e)
                })
                //audioSrc=window.URL.createObjectURL(e);
                console.log("succ stop", e,audioSrc)
            },
            onRecordCallback: (e) => {
                console.log("recording", e)
            },
            errorCallback: (err) => {
                console.log("error", err)
            }
        }

        return (
            <div>
                <AudioAnalyser {...audioProps}>
                <div className="btn-box">
                        {status !== "recording" &&
                        <button onClick={() => this.controlAudio("recording")}>开始</button>}
                        {status === "recording" &&
                        <button onClick={() => this.controlAudio("paused")}>暂停</button>}
                        <button onClick={() => this.controlAudio("inactive")}>停止</button>
                </div>
                </AudioAnalyser>

                <p>choose output type</p>
                <select name="" id="" onChange={(e) => this.changeScheme(e)} value={audioType}>
                    <option value="audio/webm">audio/webm（default）</option>
                    <option value="audio/wav">audio/wav</option>
                    <option value="audio/mp3">audio/mp3</option>
                </select>

                {
                    /**
                     * this.state.audioSrc=='undefined'
                    ?null
                    :<audio controls src={this.state.audioSrc}/>
                     */
                }
                
            </div>
        );
    }

}
