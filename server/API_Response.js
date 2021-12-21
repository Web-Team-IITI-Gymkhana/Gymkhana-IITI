const [loading, setLoading] = useState(true)
const dispatch = useDispatch();

const currentUser = "Cynaptics"

useEffect(() => {
  dispatch(getUser(currentUser))
  dispatch(getSections(currentUser))
  setLoading(false)
}, [dispatch]);



const data = useSelector((state) => state)
console.log(data)

let user = data.users

let userEmailID = user.userEmailId
let userName = user.userName

let latestVersion = user.contentVersions[(user.contentVersions).length - 1]

let name = latestVersion.userDetails.name
let logoSrc = latestVersion.userDetails.logo
let socialMedia = latestVersion.userDetails.socialMedia

let Sections  = latestVersion.Sections

let email = latestVersion.contactDetails.email
let phoneNumber = latestVersion.contactDetails.phoneNumber

let homePagePoster = latestVersion.homePagePoster
let themeDetails = latestVersion.themeDetails


Sections.map((section)=>{

  let sectionID = section.sectionID
  let sectionName = section.sectionName
  let sectionHeader = section.sectionHeader
  let sectionContent = section.sectionContent

  sectionContent.map((sectionChild)=>{
    let sectionChildID = sectionChild.sectionChildID
    let sectionChildName = sectionChild.sectionChildName
    let sectionChildImage = sectionChild.sectionChildImage
    let sectionChildDesc = sectionChild.sectionChildDesc
  })

})


