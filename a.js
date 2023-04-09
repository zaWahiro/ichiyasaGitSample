
        const posts=[
            {
                id:1,
                content:'JavaScriptは楽しい!',
                likes:2
            },
            {
                id:2,
                content:'プログラミング大好き!',
                likes:3
            },
            {
                id:3,
                content:'React勉強しよう!',
                likes:1
            }
        ]
        for(let i=0; i<posts.length; i++){
            console.log(`タイトル:${posts[i].content} ${posts[i].likes}いいね!`)
        }
        posts.forEach((post)=>{
            return console.log(`タイトル:${post.content} ${post.likes}いいね！`)
        })
        const objMap=posts.map((post)=>{
            return `タイトル: ${post.content} ${post.likes}いいね!`
        })
        console.log(objMap)

        const sampleVariable="sampleVariable";
        const sampleFunc=()=>console.log('Hello,React!');
        export {sampleVariable,sampleFunc}
        export const sampleVariables='sampleVariables';
        export const sampleFuncs=()=>console.log('Hello,React');
        export default function App(){
            console.log('Hello,React');
        }
        export default function(){
            console.log('Hello,React');
        }

