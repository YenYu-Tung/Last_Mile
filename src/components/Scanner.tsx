import React from "react";
import QrReader from "react-qr-scanner";

type ScanProps = {
  setData: React.Dispatch<React.SetStateAction<string>>;
}

class QRScan extends React.Component<ScanProps> {
  state = {
    delay: 100,
    result: ""
  };

  /* eslint-disable-next-line */
  handleScan = (data: any | null) => {
    this.setState({
      result: data
    });
    this.props.setData(this.state.result);
  };

  /* eslint-disable-next-line */
  handleError = (err: any) => { 
    console.error(err);
  };

  render() {
    return (
      <div className="w-72 h-72 border-[6px] border-white/70 border-dashed rounded-3xl m-auto">
        <QrReader
          delay={this.state.delay}
          //style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          className="w-72 h-[276px]"
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QRScan;
