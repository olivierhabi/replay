//@flow
import React, { Component } from 'react';
import { Persist } from 'react-persist';
import memoize from 'memoize-one';
import MockPlayer from './replay/default-player/MockPlayer';
import { Replay } from './replay/';
import type { PlayerConfiguration } from './replay/default-player/types';
import './App.css';
import './replay/replay-default.css';
import type { PlaybackActions } from './replay/components/player/PlayerController/PlayerController';
import ShakaVideoStreamer from './replay/components/player/VideoStreamer/ShakaVideoStreamer/ShakaVideoStreamer';
import { PlaybackError } from './replay/components/player/VideoStreamer/types';
import type { SourceTrack } from './replay/components/player/VideoStreamer/types';

type State = {
  useMock?: boolean,
  streamUrl: string,
  alwaysShowDesignControls: boolean,
  textTracks?: ?Array<SourceTrack>
};

const textTracks = [
  {
    kind: 'subtitles',
    language: 'no',
    src: 'subtitles/no.vtt',
    contentType: 'text/vtt;charset="UTF-8"',
    label: 'Norsk'
  },
  {
    kind: 'subtitles',
    language: 'en',
    src: 'subtitles/en.vtt',
    contentType: 'text/vtt;charset="UTF-8"',
    label: 'English'
  },
  {
    kind: 'captions',
    language: 'no',
    src: 'subtitles/no-captions.vtt',
    contentType: 'text/vtt;charset="UTF-8"',
    label: 'Norsk (th)'
  },
  {
    kind: 'captions',
    language: 'en',
    src: 'subtitles/en-captions.vtt',
    contentType: 'text/vtt;charset="UTF-8"',
    label: 'English captions'
  }
];

const videoUrls = [
  'https://progressive-tv2-no.akamaized.net/ismusp/isi_mp4_0/2018-07-24/S_TRENERLYGING_240718_LA(1359781_R224MP41000).mp4',
  'https://progressive-tv2-no.akamaized.net/ismusp/isi_mp4_0/2018-07-20/N_ELGBADER_200718_SIKRO_(1359389_R212MP41000).mp4',
  'https://tv2-hls-od.telenorcdn.net/dashvod15/_definst_/amlst:1385976_ps1271_pd672348.smil/manifest.mpd',
  'https://d3bwpqn4orkllw.cloudfront.net/b91c1/EG_5575_TR_47878_MEZ_(47878_ISMUSP).ism/EG_5575_TR_47878_MEZ_(47878_ISMUSP).mpd',
  'https://tv2-hls-live.telenorcdn.net/out/u/82018.mpd'
];

const licenseUrl =
  'https://sumo.tv2.no/license/wvmodular/82018?timeStamp=2018-10-21T17%3A20%3A06%2B0000&contract=8aa97e9f77c2accc9ec33fb4b288dea2&account=source';

const getSource = memoize(streamUrl => {
  if (streamUrl) {
    return {
      playbackTechnology: 'html',
      streamUrl,
      licenseUrl
    };
  } else {
    return null;
  }
});

const configOverrides: PlayerConfiguration = {
  videoStreamer: {
    dash: {
      //dashImpl: 'dashjs'
    },
    logging: {
      global: 'DEBUG'
    }
  },
  playbackMonitor: {
    visibleAtStart: false
  },
  ui: {
    //includeControls: ['playPauseButton', 'timeline', 'timeDisplay', 'gotoLiveButton', 'volume', 'fullscreenButton', 'exitButton']
  }
};

const alwaysDisplayControlsConfig = {
  interactionDetector: {
    inactivityDelay: -1
  }
};

const getPlayerOptionsFromState = state => {
  if (state.alwaysShowDesignControls) {
    // Add override when needed.
    return alwaysDisplayControlsConfig;
  }
};

class App extends Component<void, State> {
  constructor() {
    super();
    this.state = {
      useMock: true,
      alwaysShowDesignControls: true,
      streamUrl: videoUrls[0]
    };
    window.setState = stateProps => this.setState(stateProps);
  }

  togglePlayer = () => this.setState({ useMock: !this.state.useMock });

  toggleShowDesignControls = () => this.setState({ alwaysShowDesignControls: !this.state.alwaysShowDesignControls });

  handleStreamUrlFieldChange = (evt: SyntheticEvent<HTMLInputElement>) =>
    this.setState({ streamUrl: evt.currentTarget.value });

  handleVideoButtonClick = (index: number) => this.setState({ streamUrl: videoUrls[index] });
  handleNoVideoClick = () => this.setState({ streamUrl: '' });

  handleError = (err: PlaybackError) => console.error(err);

  handlePlaybackActions = (actions: PlaybackActions) => {
    window.player = actions;
  };

  toggleTextTracks = () => {
    if (this.state.textTracks) {
      this.setState({ textTracks: null });
    } else {
      this.setState({ textTracks });
    }
  };

  render() {
    const { alwaysShowDesignControls, streamUrl, useMock, textTracks } = this.state;
    return (
      <div className="App">
        <div className="App-player-panel">
          {useMock ? (
            <div>
              <MockPlayer
                options={{ ...configOverrides, ...getPlayerOptionsFromState(this.state) }}
                onExit={this.togglePlayer}>
                Design mode
              </MockPlayer>
              <p>
                <input
                  id="toggleAlwaysShowControls"
                  checked={alwaysShowDesignControls}
                  type="checkbox"
                  onChange={this.toggleShowDesignControls}
                />
                <label htmlFor="toggleAlwaysShowControls">Never hide the controls bar.</label>
              </p>
            </div>
          ) : (
            <div>
              <Replay
                source={getSource(streamUrl)}
                options={configOverrides}
                onExit={this.togglePlayer}
                onError={this.handleError}
                textTracks={textTracks}
                initialPlaybackProps={{ isPaused: false, volume: 0.5 }}
                onPlaybackActionsReady={this.handlePlaybackActions}>
                {streamUrl.indexOf('.mpd') > 1 ? <ShakaVideoStreamer /> : undefined }
              </Replay>
              <p>
                <input type="url" value={streamUrl} onChange={this.handleStreamUrlFieldChange} />
              </p>
              <p className="buttons-row">
                {videoUrls.map((_, index) => (
                  <button key={'v-' + index} onClick={() => this.handleVideoButtonClick(index)}>
                    Video {index + 1}
                  </button>
                ))}
                <button onClick={this.handleNoVideoClick}>No video</button>
                <button onClick={this.toggleTextTracks}>Toggle text tracks</button>
              </p>
            </div>
          )}
        </div>
        <Persist name="app-state" data={this.state} onMount={data => this.setState(data)} />
      </div>
    );
  }
}

export default App;
