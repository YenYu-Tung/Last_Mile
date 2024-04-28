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
    // console.log(data)
    this.setState({
      result: data
    });
    if(data !== null){
      this.props.setData(data.text);
    }    
  };

  /* eslint-disable-next-line */
  handleError = (err: any) => { 
    console.error(err);
  };

  render() {
    const previewStyle = {
      position: 'fixed',
      right: 0,
      bottom: 0,
      minWidth: '100%',
      minHeight: '100%',
      zIndex: 10,
    }

    return (
      <QrReader
          delay={false}
          constraints={{
            audio: false,
            video: { facingMode: "environment" }
          }} 
          legacyMode={true}
          onError={this.handleError}
          onScan={this.handleScan}
          style={previewStyle}
        />
    );
  }
}

export default QRScan;
