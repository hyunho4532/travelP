export function Markers (
    positions: kakao.maps.LatLng[],
    map: kakao.maps.Map
) {

    positions.forEach(position => {

        const marker = new kakao.maps.Marker({
            position: position,
            map: map
        });

        return marker.setMap(map)
    });
}