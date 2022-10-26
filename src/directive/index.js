import copyText from "./common/copyText"

export default function directive(app) {
    app.directive('hasRole',hasRole)
    app.directive('hasPermi',hasPermission)
    app.directive('copyText',copyText)
}