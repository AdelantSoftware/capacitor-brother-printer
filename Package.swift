// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorBrotherPrinter",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorBrotherPrinter",
            targets: ["CapacitorBrotherPrinterPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "CapacitorBrotherPrinterPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorBrotherPrinterPlugin"),
        .testTarget(
            name: "CapacitorBrotherPrinterPluginTests",
            dependencies: ["CapacitorBrotherPrinterPlugin"],
            path: "ios/Tests/CapacitorBrotherPrinterPluginTests")
    ]
)