

export interface defaultUserType  {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string | null;
    company: string | null;
    blog: string;
    location: string;
    email?: any;
    hireable?: any;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string | null;
    updated_at: string | null;
}

export interface defaultFollowerType {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}


export interface defaultRepoType {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner:ownerType;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string | null;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language?: any;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url?: any | null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license?: any;
    allow_forking: boolean;
    is_template: boolean;
    web_commit_signoff_required: boolean;
    topics:string[],
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}

interface ownerType {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}



/*
https://api.github.com/ 

bu baseUrl bize github api sindeki tum endpointleri verecektir

{
  "current_user_url": "https://api.github.com/users",
  "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
  "authorizations_url": "https://api.github.com/authorizations",
  "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
  "commit_search_url": "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}",
  "emails_url": "https://api.github.com/user/emails",
  "emojis_url": "https://api.github.com/emojis",
  "events_url": "https://api.github.com/events",
  "feeds_url": "https://api.github.com/feeds",
  "followers_url": "https://api.github.com/user/followers",
  "following_url": "https://api.github.com/user/following{/target}",
  "gists_url": "https://api.github.com/gists{/gist_id}",
  "hub_url": "https://api.github.com/hub",
  "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
  "issues_url": "https://api.github.com/issues",
  "keys_url": "https://api.github.com/user/keys",
  "label_search_url": "https://api.github.com/search/labels?q={query}&repository_id={repository_id}{&page,per_page}",
  "notifications_url": "https://api.github.com/notifications",
  "organization_url": "https://api.github.com/orgs/{org}",
  "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
  "organization_teams_url": "https://api.github.com/orgs/{org}/teams",
  "public_gists_url": "https://api.github.com/gists/public",
  "rate_limit_url": "https://api.github.com/rate_limit",
  "repository_url": "https://api.github.com/repos/{owner}/{repo}",
  "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
  "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
  "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
  "starred_gists_url": "https://api.github.com/gists/starred",
  "topic_search_url": "https://api.github.com/search/topics?q={query}{&page,per_page}",
  "user_url": "https://api.github.com/users/{user}",
  "user_organizations_url": "https://api.github.com/user/orgs",
  "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
  "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
}



https://api.github.com/users =>Tum user listesini verir
https://api.github.com/users/id => id sini verdigmiz user i verir
https://api.github.com/users/user =>Biz eger bir user ismini girersek bize o user a 
ait bilgileri response eden endpointleri verecek ve bu sayede bizim ihtiyacimiz olan datalardan ornegin

https://api.github.com/users/Smilga girersek bize yani bu users dan sonra girilen data gelen data nin login bilgisidir
ve eger bir ad soyad birlikte girmek istersek de o zamaan john-smilga bu sekilde yazmamiz gerekecek

Ayrica biz gihtub.com/smilga  diyerek direk smilga nin, github adresine gidebiliyoruz
https://github.com/smilga

{
  "login": "smilga",
  "id": 16165581,
  "node_id": "MDQ6VXNlcjE2MTY1NTgx",
  "avatar_url": "https://avatars.githubusercontent.com/u/16165581?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/smilga",
  "html_url": "https://github.com/smilga",
  "followers_url": "https://api.github.com/users/smilga/followers",
  "following_url": "https://api.github.com/users/smilga/following{/other_user}",
  "gists_url": "https://api.github.com/users/smilga/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/smilga/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/smilga/subscriptions",
  "organizations_url": "https://api.github.com/users/smilga/orgs",
  "repos_url": "https://api.github.com/users/smilga/repos",
  "events_url": "https://api.github.com/users/smilga/events{/privacy}",
  "received_events_url": "https://api.github.com/users/smilga/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Kaspars",
  "company": null,
  "blog": "",
  "location": "Latvia",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 3,
  "followers": 2,
  "following": 4,
  "created_at": "2015-12-05T12:47:24Z",
  "updated_at": "2022-01-17T17:03:55Z"
}

boyle bir data donuyor

Yol haritamizi cikaralim..
1-https://api.github.com/users/john-smilga diyerek bir istek gonderiyoruz
kullanici login ismi ile, mesela benim ki adem54 ornegin github da ki kullanici ismim
yani login e karsilik geliyor
Buraya istek gonderince bize, 

Github istatistik bilgileri  
"public_repos": 226,
  "public_gists": 0,
  "followers": 12366,
  "following": 0,

  User bilgileri
   "avatar_url": "https://avatars.githubusercontent.com/u/42133389?v=4"
  "name": "John Smilga",
  "company": "Coding Addict",
  "blog": "www.johnsmilga.com",
  "location": "Los Angeles",
  bu bilgiler direk geliyor

  Followers 
   "followers_url": "https://api.github.com/users/john-smilga/followers",

   followers ile ilgili de bize gelen response da endpoint gonderiyor bize
   follower slari verecek endpoint ee peki nasil handle edecegiz bunu
   Burda da biz, aslinda arka arka ya istek gonderecegiz...
   cunku bize, followers bilgisi de lazim, gelen veri ile berarber

   Yine grafiklerin icinde bulunan language oranlari, gosterimini de
   bize username ile yapgimiz requestten gelen response icinde endpoint
   olarak donecektir ve bu endpoint icinde
   repo lar bulunur ve her bir repo icinde language isminde bir property vardir
   o property ye karsiliik gelen dilleri toplayarak alacagiz...
   https://api.github.com/users/john-smilga/repos
   repos lardan da ilk 100 tanesini alacagiz yani sayfalandirma url i de var
   ordan perpage 100 diyerek alacagiz
   vatandasin 1000 tane reposu varsa hepsini alip gelmesin performansi zorlar
   Ayni sey followers icinde gecerli, url lerden sayfalandirma url ini alarak
   100 er tane olacak sekilde sayfalandir diyerek yapacagiz...
*/