document.addEventListener('DOMContentLoaded', function () {
  // 음악 플레이어와 관련된 요소들 가져오기
  const audioPlayer = document.getElementById('audio-player'); // 오디오 플레이어
  const audioSource = document.getElementById('audio-source'); // 오디오 소스
  const playPauseButton = document.getElementById('play-pause-button'); // 재생/일시정지 버튼
  const shuffleButton = document.getElementById('shuffle-button'); // 셔플 버튼
  const nextButton = document.getElementById('next-button'); // 다음 곡 버튼
  const prevButton = document.getElementById('prev-button'); // 이전 곡 버튼
  const volumeSlider = document.getElementById('volume-slider'); // 볼륨 조절 슬라이더
  const songInfo = document.getElementById('song-info'); // 곡 정보
  const artistInfo = document.getElementById('artist-info'); // 아티스트 정보
  const orderInfo = document.getElementById('order-info'); // 재생 순서 정보

  // 음악 플레이리스트 정보
  const playlist = [
    {
      song: 'Hey Brother',
      artist: 'Avicii',
      src: '../Avicii - Hey Brother.mp3'
    },
    {
      song: 'The Nights',
      artist: 'Avicii',
      src: '../Avicii - The Nights (Audio).mp3'
    },
    {
      song: 'Levels',
      artist: 'Avicii',
      src: '../Avicii - Levels.mp3'
    },
    {
      song: 'Waiting For Love',
      artist: 'Avicii',
      src: '../Avicii - Waiting For Love.mp3'
    },
    {
      song: 'Wake Me Up',
      artist: 'Avicii',
      src: '../Avicii - Wake Me Up (Official Video).mp3'
    },
    {
      song: "The Days",
      artist: "Avicii",
      src: '../Avicii - The Days (Lyric Video).mp3'
    }
    // ... (다른 곡 정보)
  ];//배열 안 사용자 객체로 곡 정보 저장

  let currentTrackIndex = 0; // 현재 재생 중인 트랙의 인덱스
  let isPlaying = false; // 재생 중인지 여부
  let isShuffled = false; // 셔플 모드인지 여부

  // 트랙 로드 함수
  function loadTrack(index) {
    const track = playlist[index];
    // 곡 및 아티스트 정보 업데이트
    songInfo.textContent = track.song;//
    artistInfo.textContent = track.artist;
    audioSource.src = track.src;
    audioPlayer.load(); // 오디오 로딩
  }

  // 재생 및 일시정지 토글 함수
  function togglePlayPause() {
    if (isPlaying) {//isPlaying이 true일 경우 멈추고 false일 경우 시작
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    // 재생/일시정지 버튼 텍스트 변경
    isPlaying = !isPlaying;//반대 속성으로 변경
    playPauseButton.textContent = isPlaying ? '일시정지' : '재생';//이에 맞춰 글자 변경
  }

  // 셔플 토글 함수
  function toggleShuffle() {
    isShuffled = !isShuffled;
    // 셔플/순서 버튼 텍스트 변경
    shuffleButton.textContent = isShuffled ? '순서' : '셔플';
    if (isShuffled) {
      shufflePlaylist(); // 플레이리스트 셔플
    } else {
      loadTrack(currentTrackIndex);
    }
  }


  // 오디오 컨트롤 숨기기
  audioPlayer.controls = false;


  // 진행 바 관련 요소 가져오기
  const progressBar = document.getElementById('progress-bar');

// 진행 바를 조정하는 함수
  function updateProgressBar() {
    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = percentage;
  }

// 슬라이더 조작으로 음악 재생 위치 조정
  progressBar.addEventListener('input', function() {
    const seekTime = (audioPlayer.duration * (progressBar.value / 100));
    audioPlayer.currentTime = seekTime;
  });

  audioPlayer.addEventListener('timeupdate', updateProgressBar);


  // 플레이리스트 셔플 함수
  function shufflePlaylist() {
    const shuffledPlaylist = [...playlist];
    for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));//Math.random으로 뽑은 수를 Math.floor로 올림
      [shuffledPlaylist[i], shuffledPlaylist[j]] = [shuffledPlaylist[j], shuffledPlaylist[i]];//j를 난수로 하여 무작위 변경
    }
    playlist.splice(0, playlist.length, ...shuffledPlaylist);
    loadTrack(0); // 첫 번째 곡 로드
  }

  // 재생 순서 정보 업데이트 함수
  function updateOrderInfo() {
    orderInfo.textContent = `${currentTrackIndex + 1} / ${playlist.length}`;
  }

  // 각 버튼 및 슬라이더에 이벤트 리스너 추가
  playPauseButton.addEventListener('click', function () {
    togglePlayPause();
  });

  shuffleButton.addEventListener('click', function () {
    toggleShuffle();
  });

  nextButton.addEventListener('click', function () {//다음 버튼을 눌렀을 때
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;//인덱스 +1
    loadTrack(currentTrackIndex);//다음 곡 로드
    updateOrderInfo(); // 재생 순서 정보 업데이트
    if (isPlaying) {//재생 중일 경우
      audioPlayer.play();//그 다음 음악을 재생
    }
  });

  prevButton.addEventListener('click', function () {//이전 버튼을 눌렀을 때
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;//인덱스 -1
    loadTrack(currentTrackIndex);//이전 곡 로드
    updateOrderInfo(); // 재생 순서 정보 업데이트
    if (isPlaying) {//재생 중일 경우
      audioPlayer.play();//그 전 음악을 재생
    }
  });

  volumeSlider.addEventListener('input', function () {
    audioPlayer.volume = volumeSlider.value;//볼륨 슬아
  });


  audioPlayer.addEventListener('ended', function () {
    // 음악이 끝나면 다음 곡으로 넘어가는 로직
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    updateOrderInfo();
    audioPlayer.play(); // 다음 곡 재생
  });

  const fileInput = document.getElementById('file-input');
  const addSongButton = document.getElementById('add-song-button');

// 파일 선택 시 플레이 리스트에 곡 추가하는 함수
  function handleFileSelect(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const track = {
        song: file.name.replace(/\.[^/.]+$/, ""), // 파일 이름으로부터 확장자 제거
        artist: document.getElementById('song-input').value, // artist는 직접 받아온다.
        src: URL.createObjectURL(file) // 파일의 URL을 트랙의 소스로 사용
      };
      playlist.push(track); // 플레이 리스트에 트랙 추가
    }
    // 추가된 곡들을 플레이 리스트에 반영한 후 첫 번째 곡 로드
    loadTrack(currentTrackIndex);
    updateOrderInfo();
    audioPlayer.play();
    document.getElementById('song-input').value = '';//입력칸 초기화
  }

// 파일 업로드 버튼 클릭 시 파일 선택 input 열기
  addSongButton.addEventListener('click', function () {
    fileInput.click();
  });

// 파일 선택 시 handleFileSelect 함수 호출
  fileInput.addEventListener('change', handleFileSelect);

  loadTrack(currentTrackIndex); // 초기 곡 로드
  updateOrderInfo(); // 초기 재생 순서 정보 업데이트
});
