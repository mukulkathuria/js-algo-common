const PostsData = [
  {
    id: 1,
    headImg:
      'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
    heading: 'hey its for tesing',
    ImgUrl:
      'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
    caption: 'its caption',
    like: ['mukul_kathuria'],
    comments: [
      {
        id: 'l3v4akaiuxwb5at7m5j',
        user: 'mukul_kathuria',
        comment: 'its awesome',
        reply: [
          {
            id: 'l3v4azh7yq2ra84cgvd',
            user: 'mukul_kathuria',
            comment: 'its reply 2',
            reply: [
              {
                id: 'l3v4bkflodtwi42kr8',
                user: 'mukul_kathuria',
                comment: 'its reply 3',
                reply: [
                  {
                    id: 'l3v4bvmtsfvggcvhz',
                    user: 'mukul_kathuria',
                    comment: 'its reply 4',
                    reply: [
                      {
                        id: 'l3v4deqzq37pfnhksws',
                        user: 'mukul_kathuria',
                        comment: 'its reply 5',
                        reply: [
                          {
                            id: 'l3v4drnn3l8o4a50w9o',
                            user: 'mukul_kathuria',
                            comment: 'its reply 6',
                            reply: [
                              {
                                id: 'l3v4ds9wy3kh2vz1ut',
                                user: 'mukul_kathuria',
                                comment: 'its reply 7',
                                reply: [
                                  {
                                    id: 'l3v4dsze2hcgey8zem3',
                                    user: 'mukul_kathuria',
                                    comment: 'its reply 8',
                                    reply: [
                                      {
                                        id: 'l3v4dtrztd1h4whpw1s',
                                        user: 'mukul_kathuria',
                                        comment: 'its reply 9',
                                        reply: []
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const ids = [
  "itsreply1233",
  "itsreply1234",
  "itsreply1235",
  "itsreply1236"
];
function addRepliesToArray(id, comments,uid) {
  for (let i = 0; i < comments.length; i += 1) {
    if (comments[i].id === id) {
      return comments[i].reply.push({
        id: uid,
        user: 'mukul_kathuria',
        comment: 'its automatic reply',
        reply: []
      });
    }
     addRepliesToArray(id, comments[i].reply,uid);
  }
}
addRepliesToArray('l3v4azh7yq2ra84cgvd',PostsData[0].comments, ids[0]);
addRepliesToArray('l3v4azh7yq2ra84cgvd',PostsData[0].comments, ids[1]);
addRepliesToArray(ids[1],PostsData[0].comments, ids[2])
addRepliesToArray(ids[2],PostsData[0].comments, ids[3])

function iterateArray(arr){
  let secondArray = [];
  for(let i=0;i <arr.length; i+=1){
    if(arr[i].reply && arr[i].reply.length){
      secondArray = [...secondArray,...arr[i].reply]
    }      
     console.log(arr[i])
  }
  if(secondArray.length){
     return iterateArray(secondArray)
  }
}

 iterateArray(PostsData[0].comments)
