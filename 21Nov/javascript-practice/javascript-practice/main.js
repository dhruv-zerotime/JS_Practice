
const responseData = require("./response.json");
const sectionData = require("./section.json");
const quizData = require("./quiz.json");
const sourceData = require("./source.json");
const topicData = require("./topic.json");

//here user query is assumed to be obj of array containing id's of corresponding

const userQuery = {
  userSelectedTopicsIds: [2, 10, 12],
  userSelectedFormatIds: [3, 1, 2],
  userSelectedSourceIds: [12, 6, 20],
};

// getPointsAddedResponse(userQuery);

userQuery.userCustomSection = [
  { sectionId: 3, itemIds: [41, 37, 43] },
  { sectionId: 4, itemIds: [14, 10, 8] },
  { sectionId: 6, itemIds: [27, 25, 28] },
  { sectionId: 10, itemIds: [57, 56, 55] },
];

const result = getPointsAddedResponseAlternative(userQuery);

// console.log(result);




function addPointsforGames(section, Query) {
  const {
    userSelectedFormatIds,
  } = Query;

  let points = 0;
  // let addFormat = true;     //this variable takes care of only adding points only once per section

  // section.content.map((item, index) => {
  //   if (userSelectedFormatIds.includes(4) && addFormat) {
  //     addFormat = false;
  //     points += 10;
  //   }
  // });
  if (userSelectedFormatIds.includes(4)) {
        points += 10;
      }
  section.points = section.points + points;
  return section;
}

function addPointsforNews(section, Query) {
  const {
    userSelectedFormatIds,
    userSelectedSourceIds,
    userSelectedTopicsIds,
  } = Query;

  let points = 0;
  let addFormat = true;

  section.content.map((items) => {
    if (userSelectedTopicsIds.includes(items.topic_id)) {
        points += 100;
    }
   
    if (userSelectedFormatIds.includes(2) && addFormat){
        addFormat = false;
        points += 10;
    }
  });

  section.points = points;
  return section;
}

function addPointsforQuiz(section, Query) {
  const {
    userSelectedFormatIds,
    userSelectedTopicsIds,
  } = Query;

  let points = 0;
  let addTopPoint = true;
  let addformatPoint = true;

  section.content.map((items)=>{
    const topicId = quizData.find(({ id }) => id === items.id);

    if (userSelectedTopicsIds.includes(topicId.topic_id) && addTopPoint){
        addTopPoint = false;
        points += 100;
    }
    if (userSelectedFormatIds.includes(4) || userSelectedFormatIds.includes(6)){
        addformatPoint = false;
        points += 10;
    }
    })

  section.points = section.points + points;
  return section;
}

function addPointsforCustomData(section, Query) {
  const {
    userSelectedTopicsIds,
    userSelectedSourceIds,
    userSelectedFormatIds,
    userCustomSection,
  } = Query;

 //check wheather user have given the custom data or not and if not then return from here only
  if (!userCustomSection) {
    return section;
  }

  //custom section id is needed to be checked if this section id is present in the costomer provided one then only continue
  const checkSectionId = userCustomSection.find(
    ({ sectionId }) => sectionId === section.section_id
  );

  if (!checkSectionId) {
    return section;
  }

  //for each section once 100 points are alloted for topicid match
  const getTopicId = sectionData.find(({ id }) => id === section.section_id);

  let points = 0;

  if (userSelectedTopicsIds.includes(getTopicId.topic_id)) {
    points += 100;
  }

  let addFormat = true;
  let addSource = true;

  section.content.map((items) => {
    //only if id matches with the usercustom Provided for items then continue
    if(checkSectionId.itemIds.includes(items.id)){
      if(userSelectedFormatIds.includes(items.format_id) && addFormat){    //check for the formatId match
        points += 10
        addFormat = false
      }
      if(userSelectedSourceIds.includes(items.source_id) && addSource){    //check for the sourceId match
        points += 10;
        addSource = false
      }
    }
  });
  
  //at lst all the points are added to the section
  section.points = section.points + points;

  return section
}

//alternative solution with switch
function getPointsAddedResponseAlternative(userQuery) {
 
  const pointAddedResonse = responseData.map((section) => {
    switch (section.section_type) {
      case "news":
        return addPointsforNews(section, userQuery);
      case "games":
        return addPointsforGames(section, userQuery);
      case "Quiz":
        return addPointsforQuiz(section, userQuery);
      case "Flight":
        return addPointsforCustomData(section, userQuery);   
      default:
        return section;  
    }
  });

  console.log(pointAddedResonse)
   //sort the response then send
  // const sortedResponse = JSON.stringify(pointAddedResonse.sort((a,b)=> a.points - b.points));
  const sortedResponse = pointAddedResonse.sort((a,b)=> a.points - b.points)
  return sortedResponse

}



























//
// data for consideration of sections type
// function getPointsAddedResponse(userQuery) {
//   const {
//     userSelectedFormatIds,
//     userSelectedSourceIds,
//     userSelectedTopicsIds,
//   } = userQuery;

//   const newResponse = responseData.map((section) => {
//     let points = 0;
//     if (section.section_type === "news") {
//       let addFormat = true;
//       section.content.map((items, index) => {
//         if (userSelectedTopicsIds.includes(items.topic_id)) {
//           points += 100;
//         }

//         if (userSelectedFormatIds.includes(2) && addFormat) {
//           addFormat = false;
//           points += 10;
//         }
//       });
//     }
//     if (section.section_type === "games") {
//       let addFormat = true;
//       section.content.map((item, index) => {
//         if (userSelectedFormatIds.includes(4) && addFormat) {
//           addFormat = false;
//           points += 10;
//         }
//       });
//     }

//     if (section.section_type == "Quiz") {
//       const quizid = section.content[0].id;
//       const topicId = quizData.find(({ id }) => id === quizid);

//       if (userSelectedTopicsIds.includes(topicId.topic_id)) {
//         points += 100;
//       }
//       //if there were more than one element the we can use the findone method and get the element
//       if (
//         userSelectedFormatIds.includes(4) ||
//         userSelectedFormatIds.includes(6)
//       ) {
//         points += 10;
//       }
//     }

//     section.points = points;
//     return section;
//   });
// }