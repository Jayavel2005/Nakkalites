import React, { useState, useEffect } from 'react'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const PopularVideos = () => {

  const [recentVideos, setRecentVidoes] = useState([]);

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       const API_KEY = "";
  //       const CHANNEL_ID = "UCiPmhfdCL06cSVTXKabF0Zg";

  //       const res = await fetch(
  //         `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=5&order=viewCount&type=video&videoDuration=medium&key=${API_KEY}`
  //       );
  //       const data = await res.json();
  //       setRecentVidoes(data.items || []);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchVideos();
  // }, [])

  // console.log(recentVideos);
  const mockApiResponse = {
    "kind": "YoutubeListResponse",
    "etag": "z-gB2cfk6Gsf_zV53gajp6f8ejY",
    "nextPageToken": "CAUQAA",
    "regionCode": "IN",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 6
    },
    "items": [
      {
        "kind": "YoutubeResult",
        "etag": "sUj2P3lC_zZ9R8YlW4wXz_7vQ4Q",
        "id": {
          "kind": "youtube#video",
          "videoId": "3S_2gNQ8lqA"
        },
        "snippet": {
          "publishedAt": "2025-08-08T10:00:15Z",
          "channelId": "UCiPmhfdCL06cSVTXKabF0Zg",
          "title": "Designing a Modern UI with React & Tailwind CSS",
          "description": "A deep dive into creating beautiful and responsive user interfaces from scratch using the power of React and Tailwind CSS.",
          "thumbnails": {
            "default": {
              "url": "https://placehold.co/120x90/1e293b/ffffff?text=React+UI",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://placehold.co/320x180/1e293b/ffffff?text=React+UI",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://placehold.co/480x360/1e293b/ffffff?text=React+UI",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Dev Pro",
          "liveBroadcastContent": "none",
          "publishTime": "2025-08-08T10:00:15Z"
        }
      },
      {
        "kind": "YoutubeResult",
        "etag": "pL_8rQ_d9R8Y_zZ9lW4wXz_7vQ4Q",
        "id": {
          "kind": "youtube#video",
          "videoId": "a9F8zQ_7vLp"
        },
        "snippet": {
          "publishedAt": "2025-08-07T18:30:00Z",
          "channelId": "UCiPmhfdCL06cSVTXKabF0Zg",
          "title": "Exploring the Hidden Temples of South India",
          "description": "Join us on an epic adventure as we explore ancient temples and uncover their secrets. A cinematic travel vlog.",
          "thumbnails": {
            "default": {
              "url": "https://placehold.co/120x90/854d0e/ffffff?text=Temples",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://placehold.co/320x180/854d0e/ffffff?text=Temples",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://placehold.co/480x360/854d0e/ffffff?text=Temples",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Dev Pro",
          "liveBroadcastContent": "none",
          "publishTime": "2025-08-07T18:30:00Z"
        }
      },
      {
        "kind": "YoutubeResult",
        "etag": "wXz_7vQ4QsUj2P3lC_zZ9R8YlW4",
        "id": {
          "kind": "youtube#video",
          "videoId": "zZ9R8YlW4wX"
        },
        "snippet": {
          "publishedAt": "2025-08-06T12:00:00Z",
          "channelId": "UCiPmhfdCL06cSVTXKabF0Zg",
          "title": "The Future of AI: Beyond Large Language Models",
          "description": "What comes after ChatGPT and Gemini? We discuss the future of artificial intelligence with leading experts in the field.",
          "thumbnails": {
            "default": {
              "url": "https://placehold.co/120x90/1d4ed8/ffffff?text=Future+AI",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://placehold.co/320x180/1d4ed8/ffffff?text=Future+AI",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://placehold.co/480x360/1d4ed8/ffffff?text=Future+AI",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Dev Pro",
          "liveBroadcastContent": "none",
          "publishTime": "2025-08-06T12:00:00Z"
        }
      },
      {
        "kind": "YoutubeResult",
        "etag": "Q_d9R8Y_zZ9lW4wXz_7vP3lCsUj",
        "id": {
          "kind": "youtube#video",
          "videoId": "R8YlW4wXz_7"
        },
        "snippet": {
          "publishedAt": "2025-08-05T09:45:00Z",
          "channelId": "UCiPmhfdCL06cSVTXKabF0Zg",
          "title": "Minimalist Desk Setups for Peak Productivity 2025",
          "description": "Get inspired to declutter and optimize your workspace with these clean and minimal desk setups.",
          "thumbnails": {
            "default": {
              "url": "https://placehold.co/120x90/374151/ffffff?text=Desk+Setup",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://placehold.co/320x180/374151/ffffff?text=Desk+Setup",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://placehold.co/480x360/374151/ffffff?text=Desk+Setup",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Dev Pro",
          "liveBroadcastContent": "none",
          "publishTime": "2025-08-05T09:45:00Z"
        }
      },
      {
        "kind": "YoutubeResult",
        "etag": "zZ9lW4wXz_7vP3lCsUjQ_d9R8Y_",
        "id": {
          "kind": "youtube#video",
          "videoId": "lW4wXz_7vP3"
        },
        "snippet": {
          "publishedAt": "2025-08-04T16:20:00Z",
          "channelId": "UCiPmhfdCL06cSVTXKabF0Zg",
          "title": "Making Lofi Beats for Studying/Relaxing",
          "description": "A chill session where I create a lofi hip hop track from scratch. Perfect for focus and relaxation.",
          "thumbnails": {
            "default": {
              "url": "https://placehold.co/120x90/5b21b6/ffffff?text=Lofi+Beats",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://placehold.co/320x180/5b21b6/ffffff?text=Lofi+Beats",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://placehold.co/480x360/5b21b6/ffffff?text=Lofi+Beats",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Dev Pro",
          "liveBroadcastContent": "none",
          "publishTime": "2025-08-04T16:20:00Z"
        }
      },
    //   {
    //     "kind": "YoutubeResult",
    //     "etag": "zZ9lW4wXz_7vP3lCsUjQ_d9R8Y_",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "lW4wXz_7vP3"
    //     },
    //     "snippet": {
    //       "publishedAt": "2025-08-04T16:20:00Z",
    //       "channelId": "UCiPmhfdCL06cSVTXKabF0Zg",
    //       "title": "Making Lofi Beats for Studying/Relaxing",
    //       "description": "A chill session where I create a lofi hip hop track from scratch. Perfect for focus and relaxation.",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://placehold.co/120x90/5b21b6/ffffff?text=Lofi+Beats",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://placehold.co/320x180/5b21b6/ffffff?text=Lofi+Beats",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://placehold.co/480x360/5b21b6/ffffff?text=Lofi+Beats",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Dev Pro",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2025-08-04T16:20:00Z"
    //     }
    //   },
    //   {
    //     "kind": "YoutubeResult",
    //     "etag": "zZ9lW4wXz_7vP3lCsUjQ_d9R8Y_",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "lW4wXz_7vP3"
    //     },
    //     "snippet": {
    //       "publishedAt": "2025-08-04T16:20:00Z",
    //       "channelId": "UCiPmhfdCL06cSVTXKabF0Zg",
    //       "title": "Making Lofi Beats for Studying/Relaxing",
    //       "description": "A chill session where I create a lofi hip hop track from scratch. Perfect for focus and relaxation.",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://placehold.co/120x90/5b21b6/ffffff?text=Lofi+Beats",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://placehold.co/320x180/5b21b6/ffffff?text=Lofi+Beats",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://placehold.co/480x360/5b21b6/ffffff?text=Lofi+Beats",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Dev Pro",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2025-08-04T16:20:00Z"
    //     }
    //   },

    ]
  };

  useEffect(() => {
    setRecentVidoes(mockApiResponse.items)
  }, [])



  return (
    <div className='flex justify-center gap-5 my-4 flex-wrap'>
      {recentVideos.map((video, index) => (
        <CardContainer className="inter-var" key={index}>
          <CardBody className="bg-white relative group/card   border-black/[0.1] w-auto max-lg:w-[20rem] lg:w[25rem] h-auto rounded-xl p-6 ">
            <CardItem translateZ="100" className="w-full">
              <img
                src={video.snippet.thumbnails.high.url}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex-col gap-2 items-center flex  mt-5">

              <CardItem
                translateZ="50"
                className="text-sm font-normal text-neutral-600 font-poppins"
              >
                {video.snippet.title}
              </CardItem>


              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}}`} className='bg-black px-4 py-2 rounded-2xl text-white transform translate-z-10'>Watch Now &nbsp;<i className="bi bi-play-circle"></i></a>
            </div>
          </CardBody>
        </CardContainer>
      ))}


    </div>
  )
}

export default PopularVideos
