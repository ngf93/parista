const priceInput = document.getElementById("priceInput");
const priceButton = document.getElementById("priceButton")

function openPriceInput() {
    priceInput.classList.add('opened')
    priceButton.classList.remove('Buttonclose')

    priceButton.onclick = closePriceInpute;
}

function closePriceInpute() {
    priceInput.classList.remove('opened')
    priceButton.classList.add('Buttonclose')

    priceButton.onclick = openPriceInput;
}

if (priceButton !== null) {
    priceButton.onclick = openPriceInput;
}


const ManufactureItems = document.getElementById("ManufactureItems");
const ManufactureButton = document.getElementById("ManufactureButton")

function openManufacture() {
    ManufactureItems.classList.add('openedFlex')
    ManufactureButton.classList.remove('Buttonclose')

    ManufactureButton.onclick = closeManufacture;
}

function closeManufacture() {
    ManufactureItems.classList.remove('openedFlex')
    ManufactureButton.classList.add('Buttonclose')

    ManufactureButton.onclick = openManufacture;
}

if (ManufactureButton !== null) {
    ManufactureButton.onclick = openManufacture;
}



const roomArea = document.getElementById("roomArea");
const roomAreaButton = document.getElementById("roomAreaButton")

function openRoomArea() {
    roomArea.classList.add('opened')
    roomAreaButton.classList.remove('Buttonclose')

    roomAreaButton.onclick = closeRoomArea;
}

function closeRoomArea() {
    roomArea.classList.remove('opened')
    roomAreaButton.classList.add('Buttonclose')

    roomAreaButton.onclick = openRoomArea;
}

if (roomAreaButton !== null) {
    roomAreaButton.onclick = openRoomArea;
}



const InventorItems = document.getElementById("InventorItems");
const InventorButton = document.getElementById("InventorButton")

function openInventor() {
    InventorItems.classList.add('openedFlex')
    InventorButton.classList.remove('Buttonclose')

    InventorButton.onclick = closeInventor;
}

function closeInventor() {
    InventorItems.classList.remove('openedFlex')
    InventorButton.classList.add('Buttonclose')

    InventorButton.onclick = openInventor;
}


if (InventorButton !== null) {
    InventorButton.onclick = openInventor;
}




const Noice = document.getElementById("Noice");
const NoiceButton = document.getElementById("NoiceButton")

function openNoice() {
    Noice.classList.add('opened')
    NoiceButton.classList.remove('Buttonclose')

    NoiceButton.onclick = closeNoice;
}

function closeNoice() {
    Noice.classList.remove('opened')
    NoiceButton.classList.add('Buttonclose')

    NoiceButton.onclick = openNoice;
}


if (NoiceButton !== null) {
    NoiceButton.onclick = openNoice;
}


const refrigerantItems = document.getElementById("refrigerantItems");
const refrigerantButton = document.getElementById("refrigerantButton")

function openRefrigerant() {
    refrigerantItems.classList.add('openedFlex')
    refrigerantButton.classList.remove('Buttonclose')

    refrigerantButton.onclick = closeRefrigerant;
}

function closeRefrigerant() {
    refrigerantItems.classList.remove('openedFlex')
    refrigerantButton.classList.add('Buttonclose')

    refrigerantButton.onclick = openRefrigerant;
}


if (refrigerantButton !== null) {
    refrigerantButton.onclick = openRefrigerant;
}




const WifiControl = document.getElementById("WifiControl");
const WifiControlButton = document.getElementById("WifiControlButton")

function openWifiControl() {
    WifiControl.classList.add('openedFlex')
    WifiControlButton.classList.remove('Buttonclose')

    WifiControlButton.onclick = closeWifiControl;
}

function closeWifiControl() {
    WifiControl.classList.remove('openedFlex')
    WifiControlButton.classList.add('Buttonclose')

    WifiControlButton.onclick = openWifiControl;
}


if (WifiControlButton !== null) {
    WifiControlButton.onclick = openWifiControl;
}



const ColorItems = document.getElementById("ColorItems");
const ColorButton = document.getElementById("ColorButton")

function openColorItems() {
    ColorItems.classList.add('openedFlex')
    ColorButton.classList.remove('Buttonclose')

    ColorButton.onclick = closeColorItems;
}

function closeColorItems() {
    ColorItems.classList.remove('openedFlex')
    ColorButton.classList.add('Buttonclose')

    ColorButton.onclick = openColorItems;
}


if (ColorButton !== null) {
    ColorButton.onclick = openColorItems;
}



const pages = document.querySelectorAll('.Category__paginationPage');
const previouspage = document.getElementById("previouspage");
const nextpage = document.getElementById("nextpage");
let currentPage = 1;
let totalPages = 4;

function goToPreviouspage() {
    if (currentPage === 1) //Если страница 1, то ничего не происходит
        return
    currentPage -= 1;
    pages.forEach(page => {
        if (currentPage.toString() === page.value) {
            page.classList.add('Category__currentPage')
        } else {
            page.classList.remove('Category__currentPage')
        }
    });
}

function goToNextpage() {
    if (currentPage === totalPages) //Если страница последняя, то ничего не происходит
        return
    currentPage += 1;
    pages.forEach(page => {
        if (currentPage.toString() === page.value) {
            page.classList.add('Category__currentPage')
        } else {
            page.classList.remove('Category__currentPage')
        }
    });
}


if (previouspage !== null && nextpage !== null) {
    previouspage.onclick = goToPreviouspage;
    nextpage.onclick = goToNextpage;
}

pages.forEach(page => {
    page.addEventListener('click', () => {
    pages.forEach(page => page.classList.remove('Category__currentPage'));
    page.classList.add('Category__currentPage');
    currentPage = Number(`${page.value}`);
  });
});